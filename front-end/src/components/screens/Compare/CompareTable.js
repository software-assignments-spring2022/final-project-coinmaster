function Table(coin1, coin2, propertiesToCompare){


    return(
        <table className="table table-hover">
        <thead class="table-light">
          <tr>
              <th></th>
              <th>{coin1}</th>
              <th>{coin2}</th>
          </tr>
        </thead>
        <tbody>
          {propertiesToCompare.map((val, key) => {
            return (
              <tr key={key}>
                {Object.values(val).map((headerValue) => {
                  return <td>{headerValue}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
export default Table;