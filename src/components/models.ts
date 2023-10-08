export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export enum SmsDirectionApi {
  Inbound = 'inbound',
  Outbound = 'outbound'
}
export interface TextMessage {
  id: string,
  body: string,
  originNumber: string,
  targetNumber: string,
  direction: SmsDirectionApi,
  messageDt: string; // date-time
}
