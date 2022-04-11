import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import styles from './index.module.scss';

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loginStore } = useStore();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    loginStore.login();
    navigate('/', { replace: true });
  };
  return (
    <div className={styles['login_panel']}>
      <Form
        name="normal_login"
        className={styles['login-form']}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: t('login.username_check'),
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={t('login.username')} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t('login.password_check'),
            },
          ]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder={t('login.password')} />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>{t('login.remember')}</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
            {t('login.login')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default observer(Login);
