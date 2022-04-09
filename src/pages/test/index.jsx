import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { DatePicker, Button } from 'antd';
function Test() {
  const { configStore } = useStore();
  return <div>
    <DatePicker />
    <Button onClick={() => configStore.switchLanguage('en_US')}>切换</Button>
  </div>
}

export default observer(Test);