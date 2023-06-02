export default function Root(props) {
  return (
    <nav style={{ display: 'flex' }}>
      <h1 style={{ padding: '0 30px' }}>Single-spa Test</h1>
      <ul style={{ display: 'flex' }}>
        <li style={{ listStyle: 'none', padding: '10px' }}>
          <a href="/">Home</a>
        </li>
        <li style={{ listStyle: 'none', padding: '10px' }}>
          <a href="/angular">Angular</a>
        </li>
        <li style={{ listStyle: 'none', padding: '10px' }}>
          <a href="/react">React</a>
        </li>
      </ul>
    </nav>
  );
}
