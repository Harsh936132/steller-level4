import { useState } from 'react';
import { Wallet, ArrowDownToLine, Activity } from 'lucide-react';
import { requestAccess, setAllowed } from '@stellar/freighter-api';

function App() {
  const [address, setAddress] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [amount, setAmount] = useState('');

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      await setAllowed();
      const result = await requestAccess() as { address: string };
      setAddress(result.address);
    } catch (e) {
      console.error(e);
      alert('Failed to connect with Freighter');
    } finally {
      setIsConnecting(false);
    }
  };

  const deposit = async () => {
    if (!address) return alert('Please connect your wallet first');
    if (!amount) return alert('Please enter an amount');
    // Mocking inter-contract deposit call
    alert(`Mocking deposit of ${amount} custom tokens into the vault using Soroban Client!`);
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      <header className="w-full max-w-4xl flex justify-between items-center mb-16 glass-panel px-6 py-4">
        <div className="flex items-center gap-2">
          <Activity className="text-indigo-400 w-8 h-8" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            StellarVault
          </h1>
        </div>
        <button className="btn-primary flex items-center gap-2" onClick={connectWallet} disabled={isConnecting}>
          <Wallet className="w-5 h-5" />
          {address ? `${address.slice(0, 4)}...${address.slice(-4)}` : 'Connect'}
        </button>
      </header>

      <main className="w-full max-w-md">
        <div className="glass-panel p-8 flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Vault Deposit</h2>
            <p className="text-slate-400 text-sm">
              Deposit custom tokens into our secure Soroban vault using cross-contract interactions.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300 font-medium">Amount</label>
            <input
              type="number"
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button className="btn-primary w-full flex justify-center items-center gap-2 mt-2" onClick={deposit}>
            <ArrowDownToLine className="w-5 h-5" />
            Deposit to Vault
          </button>
        </div>
      </main>
      
      <footer className="mt-auto pt-10 text-slate-500 text-sm">
        Stellar Soroban Level 4 Concept Project
      </footer>
    </div>
  );
}

export default App;
