function AllData(){
    const [data, setData] = React.useState('');
    const user = React.useContext(UserContext);

    React.useEffect(() => {
      // fetch all accounts from API
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));
        });

    }, []);

    return (<>
      <h5> All Data in Store:</h5>
      {JSON.stringify(data)}
      </>);
}
