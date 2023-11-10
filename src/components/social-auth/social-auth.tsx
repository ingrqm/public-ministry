import { useTranslations } from 'next-intl';

import { Button, Separator, Typography } from '@/components/ui';

import { AppleIcon, GoogleIcon } from '@/assets/icons';

type SocialAuthProps = {
  onGoogleAuth: () => void;
  onAppleAuth: () => void;
};

export const SocialAuth = ({ onAppleAuth, onGoogleAuth }: SocialAuthProps) => {
  const t = useTranslations('component.social-auth');

  return (
    <>
      <Separator>
        <Typography.Small>{t('continue-with')}</Typography.Small>
      </Separator>
      <div className="flex justify-center gap-8 py-5">
        <Button variant="link" size="icon" onClick={onGoogleAuth}>
          <GoogleIcon />
        </Button>
        <Button variant="link" size="icon" onClick={onAppleAuth}>
          <AppleIcon />
        </Button>
      </div>
      <div className="mb-6 w-full">
        <Separator>
          <Typography.Small>{t('or')}</Typography.Small>
        </Separator>
      </div>
    </>
  );
};
