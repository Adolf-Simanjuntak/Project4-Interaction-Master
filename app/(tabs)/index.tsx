import React, { useState } from 'react';

const App = () => {
  // Semua state asli tetap dipertahankan
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#e8e8e8');

  // Fungsi asli tetap ada
  const randomBg = () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(color);
  };

  return (
    <div style={{ ...styles.appContainer, background: bgColor }}>
      <div style={styles.card}>
        <h2 style={styles.title}>Panel Administrasi Data</h2>

        {/* Input Nama - Gaya Formal */}
        <div style={styles.section}>
          <label style={styles.label}>Nama Pengguna</label>
          <input
            type="text"
            placeholder="Masukkan nama lengkap..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <p style={styles.greeting}>Halo, <strong>{name || '...'}</strong></p>
        </div>

        {/* Counter - Gaya Formal dengan tombol + dan - */}
        <div style={styles.section}>
          <label style={styles.label}>Nilai Penghitung</label>
          <div style={styles.counterDisplay}>{count}</div>
          <div style={styles.buttonGroup}>
            <button style={styles.actionButton} onClick={() => count > 0 && setCount(count - 1)}>-</button>
            <button style={styles.actionButton} onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        {/* Tombol Ganti Warna */}
        <button onClick={randomBg} style={styles.primaryButton}>
          Ubah Warna Latar
        </button>
      </div>
    </div>
  );
};

// Styling Formal yang bersih
const styles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.4s',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  card: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '350px'
  },
  title: { 
    fontSize: '18px', 
    marginBottom: '20px', 
    borderBottom: '1px solid #ddd', 
    paddingBottom: '10px',
    textAlign: 'center'
  },
  section: { marginBottom: '20px' },
  label: { display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#666', marginBottom: '8px' },
  input: { 
    width: '100%', 
    padding: '10px', 
    boxSizing: 'border-box', 
    border: '1px solid #ccc', 
    borderRadius: '4px' 
  },
  greeting: { fontSize: '14px', marginTop: '10px', color: '#333' },
  counterDisplay: { fontSize: '36px', textAlign: 'center', margin: '15px 0', fontWeight: 'bold' },
  buttonGroup: { display: 'flex', justifyContent: 'center', gap: '15px' },
  actionButton: { 
    width: '50px', 
    padding: '10px', 
    cursor: 'pointer', 
    border: '1px solid #333', 
    background: '#fff',
    borderRadius: '4px',
    fontWeight: 'bold'
  },
  primaryButton: { 
    width: '100%', 
    padding: '12px', 
    background: '#333', 
    color: '#fff', 
    border: 'none', 
    cursor: 'pointer', 
    borderRadius: '4px',
    fontWeight: '600',
    marginTop: '10px'
  }
};

export default App;