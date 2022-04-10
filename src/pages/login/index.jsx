import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

function Login() {
  const { t } = useTranslation();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
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
  );
}
export default Login;
