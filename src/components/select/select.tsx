import type { SelectProps as SelectRawProps } from '@radix-ui/react-select';

import { SelectContent, SelectItem, Select as SelectRaw, SelectTrigger, SelectValue } from '@/components/ui';

type SelectProps = {
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
} & SelectRawProps;

export const Select = ({ options, placeholder, ...props }: SelectProps) => {
  return (
    <SelectRaw {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRaw>
  );
};
