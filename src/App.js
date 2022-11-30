import 'antd/dist/reset.css';
import Layout from './pages/layout';
import styles from './App.less'

function App () {

  return (
    <div className="App" style={styles.app}>
      <Layout></Layout>
    </div>
  );
}

export default App;
