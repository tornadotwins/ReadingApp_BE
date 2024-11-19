type ToolType = {
  toolName: string;
  onClick: () => void;
}

type ToolsPropsType = {
  tools: ToolType[];
}

export type {
  ToolType,
  ToolsPropsType,
}