import { observer } from 'mobx-react-lite';
import { DatePicker } from 'antd';
function Home() {
  return (
    <div>
      <p>测试主页</p>
      <DatePicker />
    </div>
  );
}

export default observer(Home);
