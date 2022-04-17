import loadingImg from '@/assets/imgs/loading.gif';
function Loading() {
  const loading = {
    width: '100%',
    height: '100%',
    background: `url(${loadingImg}) center/cover`,
  };
  return <div style={loading}></div>;
}

export default Loading;
