import AppState from './src/AppState/AppState'
import registerNNPushToken from 'native-notify';


export default function App() {
  registerNNPushToken(3280, 'Ldds0MGd7At0UoMb3f2Ijm');

  return (
    <AppState />
  );
}

