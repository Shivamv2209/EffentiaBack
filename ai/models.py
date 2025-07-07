from pydantic import BaseModel, Field
from typing import List, Optional
from enum import Enum

class PriorityEnum(str, Enum):
    LOW = "Low"
    MODERATE = "Moderate"
    HIGH = "High"
    URGENT = "Urgent"

class StatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "In Progress"
    COMPLETED = "Completed"

class TodoItem(BaseModel):
    """Individual todo item in checklist"""
    description: str = Field(..., description="Todo item description")
    completed: bool = Field(False, description="Whether the todo item is completed")

class Task(BaseModel):
    """Individual task extracted from natural language text."""
    
    title: str = Field(
        ..., 
        description="Title or summary of the task",
        min_length=1
    )
    
    description: str = Field(
        ..., 
        description="Clear, actionable description of the task to be performed",
        min_length=1
    )
    
    project: Optional[str] = Field(
        None, 
        description="Project ID this task belongs to"
    )
    
    priority: PriorityEnum = Field(
        PriorityEnum.MODERATE, 
        description="Task priority level"
    )
    
    status: StatusEnum = Field(
        StatusEnum.PENDING, 
        description="Current status of the task"
    )
    
    due_date: Optional[str] = Field(
        None, 
        description="When the task should be completed. Use original phrasing (e.g., 'end of quarter', 'by Friday', '2024-12-31')"
    )
    
    assigned_to: List[str] = Field(
        default_factory=list, 
        description="List of people or teams responsible for the task. Maintain exact names as mentioned."
    )
    
    created_by: Optional[str] = Field(
        None, 
        description="User who created the task"
    )
    
    attachments: Optional[str] = Field(
        None, 
        description="File attachments for the task"
    )
    
    todo_checklist: List[TodoItem] = Field(
        default_factory=list, 
        description="List of todo items in checklist"
    )
    
    progress: float = Field(
        0.0, 
        description="Task completion progress (0-100)",
        ge=0,
        le=100
    )