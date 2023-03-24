const redirection = require('/data/redirectionList.json');

const oldNavigationWithFileName = () => {
  return(
    <div className="flex flex-col w-screen h-screen justify-center align-center" >
      <p className="text-center text-2xl" >There is nothing here anymore,</p>
      <p className="text-center text-xl" >You should be redirected to the concerned new page</p>
    </div>
  )
};

export default oldNavigationWithFileName;

export async function getServerSideProps(context) {
  const fileName = context.query.fileName;
  const fileContentTitle = redirection.find((item) => item.fileName === fileName )?.contentTitle;
  if(fileContentTitle === undefined) {
    return {
      redirect: {
        permanent: true,
        destination: '/newpath',
      },
    };
  }

  return {
    redirect: {
      permanent: true,
      destination: `/newpath/${fileContentTitle}`,
    },
  };

  // console.log(fileContentTitle)

  // const content = null;
  // if (!content) {
  //   return {
  //     redirect: {
  //       permanent: true,
  //       destination: '/newpath/title',
  //     },
  //   };
  // }

  // return {
  //   props: {},
  // };
}