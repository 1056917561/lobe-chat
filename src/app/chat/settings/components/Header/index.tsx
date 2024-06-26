import { ActionIcon } from '@lobehub/ui';
import { Dropdown, MenuProps } from 'antd';
import { useResponsive } from 'antd-style';
import { HardDriveDownload } from 'lucide-react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { MOBILE_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import { exportSingleAgent, exportSingleSession } from '@/helpers/export';
import { useSessionStore } from '@/store/session';

export const HeaderContent = memo<{ mobile?: boolean }>(() => {
  const { t } = useTranslation('setting');
  const id = useSessionStore((s) => s.activeId);
  const { mobile } = useResponsive();

  const items = useMemo<MenuProps['items']>(
    () => [
      {
        key: 'agent',
        label: <div>{t('exportType.agent', { ns: 'common' })}</div>,
        onClick: () => {
          if (!id) return;

          exportSingleAgent(id);
        },
      },
      {
        key: 'agentWithMessage',
        label: <div>{t('exportType.agentWithMessage', { ns: 'common' })}</div>,
        onClick: () => {
          if (!id) return;

          exportSingleSession(id);
        },
      },
    ],
    [],
  );

  const size = mobile ? MOBILE_HEADER_ICON_SIZE : { fontSize: 24 };

  return (
    <Dropdown arrow={false} menu={{ items }} trigger={['click']}>
      <ActionIcon icon={HardDriveDownload} size={size} title={t('export', { ns: 'common' })} />
    </Dropdown>
  );
});
