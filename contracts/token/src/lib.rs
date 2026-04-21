#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, String};

#[contract]
pub struct Token;

#[contractimpl]
impl Token {
    pub fn initialize(env: Env, admin: Address, decimal: u32, name: String, symbol: String) {
        if env.storage().instance().has(&symbol) {
            panic!("already initialized");
        }
        env.storage().instance().set(&symbol, &name);
        // Simplistic implementation for demonstration
    }

    pub fn mint(env: Env, to: Address, amount: i128) {
        // Mint tokens logic
    }
}
