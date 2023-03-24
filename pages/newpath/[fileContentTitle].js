const newNavigationWithFileContentTitle = ({title}) => {
  return(
    <div className="flex flex-col w-screen h-screen justify-center align-center" >
      <p className="text-center text-2xl" >That page is what you were looking for,</p>
      <p className="text-center text-xl" >Now you are where you should be before</p>
      <p className="text-center text-3xl" >{title}</p>
    </div>
  )
};

export default newNavigationWithFileContentTitle;

export async function getServerSideProps(context) {
  const title = context.query.fileContentTitle;
  
  return {
    props: {title},
  };
}