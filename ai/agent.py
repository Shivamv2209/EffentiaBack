from pydantic import BaseModel, Field
from typing import List, Union
from ai.models import Task
import logfire

from pydantic_ai import Agent, RunContext, ModelRetry
from pydantic_ai.exceptions import UnexpectedModelBehavior

from prompt import system_prompt

# Configure logfire
logfire.configure(send_to_logfire="if-token-present")
logfire.instrument_pydantic_ai()

class TaskExtractionResult(BaseModel):
    """Complete result of task extraction from natural language."""
    
    tasks: List[Task] = Field(
        default_factory=list,
        description="List of extracted tasks from the input text"
    )
    
class Failure(BaseModel):
    """Use when the user prompt is off topic or not eligible for task allocation and formating and provide a explaination to the user to retry and tell the user this is not what i am made for"""
    
    explaination: str
    

agent = Agent[None, Union[Failure, TaskExtractionResult]](
    "openai:gpt-4.1-nano",
    deps_type=str,
    output_type=[Failure, TaskExtractionResult],
    system_prompt=system_prompt,
)


result = agent.run_sync("Pranavi and Qasim should collect entries for the Nagaland Meme Competition and organize them by category; due Monday.")
output = result.output
if isinstance(output, TaskExtractionResult):
    print(output)
else:
    print(output.explaination)