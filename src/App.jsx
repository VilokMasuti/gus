import IllustrationPanel from './components/IllustrationPanel';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-[#F6F5FF] ">
      <div className="flex flex-col lg:flex-row gap-36 w-full max-w-[1200px] mx-auto min-h-[700px] shadow-none">
        <div className="hidden lg:flex w-1/2 items-center justify-center ml-[6%]">
          <IllustrationPanel />
        </div>
        <div className="flex w-full lg:w-1/2 items-center justify-center ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default App;
