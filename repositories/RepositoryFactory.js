import AccountRepository from "./accountRepository"

const repositories = {
  account: AccountRepository
  // other repositories ...
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
