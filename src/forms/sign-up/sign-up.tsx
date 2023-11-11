'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import type { Congregation } from '@/api/congregations';

import { useForm } from '@/hooks';

import { SocialAuth } from '@/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

import { Account, Profile } from './sections';
import { defaultValues, FormInputs, FormTab, type FormTypes, schema } from './sign-up.schema';

type SignUpFormProps = {
  congregations: Congregation[];
};

export const SignUpForm = ({ congregations }: SignUpFormProps) => {
  const [tab, setTab] = useState<FormTab>(FormTab.account);
  const t = useTranslations('form');

  const [Form, FormField, { trigger }] = useForm<FormTypes>({
    schema,
    defaultValues,
  });

  const handleGoToProfile = async () => {
    const isValid = await trigger([FormInputs.email, FormInputs.password, FormInputs.repeatPassword]);

    if (isValid) setTab(FormTab.profile);
  };

  const handleSubmit = (values: FormTypes) => {
    // TODO: connect to API
    console.log(values);
  };

  return (
    <>
      <SocialAuth onAppleAuth={() => {}} onGoogleAuth={() => {}} />

      <Form onSubmit={handleSubmit}>
        <Tabs value={tab}>
          <TabsList className="w-full">
            <TabsTrigger onClick={() => setTab(FormTab.account)} value="account" className="w-full">
              {t('sign-up.tab.account.label')}
            </TabsTrigger>
            <TabsTrigger onClick={handleGoToProfile} value="profile" className="w-full">
              {t('sign-up.tab.profile.label')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="pt-6">
            <Account field={FormField} onGoToProfile={handleGoToProfile} />
          </TabsContent>
          <TabsContent value="profile" className="pt-6">
            <Profile field={FormField} congregations={congregations} />
          </TabsContent>
        </Tabs>
      </Form>
    </>
  );
};
