export interface AccountI {
  organizationId: string;
  deviceId: string;
  authenticationToken: string;
}

export class Account implements AccountI {
  organizationId: string;
  deviceId: string;
  authenticationToken: string;

  constructor(data?: AccountI) {
    Object.assign(this, data);
  }

  isConfigured(): boolean {
    return !!this.organizationId && !!this.deviceId && !!this.authenticationToken;
  }
}
