import './App.css';

function myFunction(x) {
  x.classList.toggle("change");
}
function App() {
  return (
      <body>
        <h1>Rallye Timer</h1>
        <div class="container" onlick="myFunction(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>

        <table>
          <tbody>
            <tr>
              <th className="th">Durchlaufzeit</th>
              <th>Differenz</th>
              <th>Intervall</th>
              <th>Abweichung</th>
            </tr>
            <tr>
              <td>Wert 1</td>
              <td>Wert 2</td>
              <td>Wert 3</td>
              <td>Wert 4</td>
            </tr>
          </tbody>
        </table>
      
      </body>
  );
}

export default App;
