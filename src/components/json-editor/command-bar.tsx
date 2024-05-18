import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import CommandButton from './command-button';

export interface CommandBarItem {
  key: string;
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  onRender?: () => JSX.Element;
}

interface CommandBarProps extends HTMLAttributes<HTMLDivElement> {
  items: CommandBarItem[];
}

const CommandBar = ({ items, className, ...props }: CommandBarProps) => {
  return (
    <div className={cn(className, 'flex')} {...props}>
      {items.map((item) => (
        <span key={item.key}>
          {item?.onRender?.() ?? (
            <CommandButton onClick={item.onClick} disabled={item.disabled}>
              {item.icon && <span>{item.icon}</span>}
              <span>{item.text}</span>
            </CommandButton>
          )}
        </span>
      ))}
    </div>
  );
};

export default CommandBar;