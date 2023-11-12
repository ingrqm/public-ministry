'use client';

import { useToast } from '@/hooks';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider as ToastProviderRaw,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

export const ToastProvider = () => {
  const { toasts } = useToast();

  return (
    <ToastProviderRaw>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProviderRaw>
  );
};
