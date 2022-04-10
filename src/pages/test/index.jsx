import { observer } from 'mobx-react-lite';
import { DatePicker } from 'antd';
function Test() {
  return (
    <div>
      <DatePicker />
    </div>
  );
}

export default observer(Test);
