const Page = ({ params }: { params: { capital: string } }) => {
    console.log(params); // Bu yerda params ni konsolga chiqaramiz
    return <div>{params.capital} sahifasi</div>;
};

export default Page;
