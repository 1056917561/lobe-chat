'use client';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '@/components/PageTitle';
import { CURRENT_VERSION } from '@/const/version';
import { useSwitchSideBarOnInit } from '@/store/global/hooks/useSwitchSettingsOnInit';
import { SettingsTabs } from '@/store/global/initialState';
import { genSiteHeadTitle } from '@/utils/genSiteHeadTitle';

import Footer from '../features/Footer';
import Common from './Common';

export default memo(() => {
  useSwitchSideBarOnInit(SettingsTabs.Common);
  const { t } = useTranslation('setting');
  const pageTitle = genSiteHeadTitle(t('tab.common'));

  return (
    <>
      <PageTitle title={pageTitle} />
      <Common />
      <Footer>LobeChat v{CURRENT_VERSION}</Footer>
    </>
  );
});
