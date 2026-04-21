#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, token};

#[contract]
pub struct Vault;

#[contractimpl]
impl Vault {
    pub fn deposit(env: Env, from: Address, token: Address, amount: i128) {
        from.require_auth();
        
        let client = token::Client::new(&env, &token);
        
        // Inter-contract call: transfer tokens from user to vault
        client.transfer(&from, &env.current_contract_address(), &amount);
    }
}
