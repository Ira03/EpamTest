import { Switcher } from './Switcher/Switcher';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__block">
          <div className="main__column"></div>
          <div className="main__column">
            <Switcher />
          </div>
        </div>
      </main>
    </div>
  );
};
