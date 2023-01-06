import { ToggleButton } from '../../components'
import { IToggle } from '../../interface/toggle.interface';

function Home() {

  const data: IToggle = {name: "News"};
  return (
    <div className="flex-1">
      <div className='h-full flex flex-col'>
          <ToggleButton {...data} />
          <div className='overflow-x-auto break-all pl-5 pr-5'>
            <h1>Trang news nè</h1>
          </div>
      </div>
    </div>
  );
}

export default Home;
