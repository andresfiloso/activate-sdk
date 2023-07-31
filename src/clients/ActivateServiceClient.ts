import {
  RequestData,
  RequestParams,
  Response,
  ActivateServiceClientOptions,
} from '../@types';
import HTTPClient from '../utils/httpClient';
class ActivateServiceClient {
  private client;

  constructor({ baseURL, jwt }: ActivateServiceClientOptions) {
    const headers = jwt ? { Authorization: `Bearer ${jwt}` } : undefined;

    this.client = new HTTPClient(baseURL, 30000, headers);
  }

  public auth = {
    login: async (payload: RequestData): Response =>
      this.client.post('/auth/signin', payload),
    getOtp: async (payload: RequestData): Response =>
      this.client.post('/auth/otp', payload),
    getPair: async (key: string): Response =>
      this.client.post(`/auth/pair/${key}`),
  };

  public account = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/account', params),
    findPaid: async (params: RequestParams): Response =>
      this.client.get('/account/paid', params),
    findOne: async (id: string): Response => this.client.get(`/account/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/account', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/account/${id}`, payload),
    disable: async (id: string): Response => this.client.put(`/account/${id}`),
    pay: async (payload: RequestData): Response =>
      this.client.post('/account/pay', payload),
  };

  public buy = {
    find: async (params?: RequestParams): Response =>
      this.client.get('/buy', params),
    findOne: async (id: string): Response => this.client.get(`/buy/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/buy', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.put(`/buy/${id}`, payload),
    patch: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/buy/${id}`, payload),
    rollback: async (id: string): Response =>
      this.client.put(`/buy/rollback/${id}`),
    approve: async (id: string): Response =>
      this.client.put(`/buy/approve/${id}`),
    cancel: async (id: string): Response =>
      this.client.put(`/buy/cancel/${id}`),
    updateWithdrawal: async (id: string): Response =>
      this.client.patch(`/buy/${id}/withdrawal`),
    updateRoadmap: async (id: string): Response =>
      this.client.patch(`/buy/${id}/roadmap`),
  };

  public cashflow = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/cashflow', params),
    findPaid: async (): Response => this.client.get('/cashflow/paid'),
    findOne: async (id: string): Response => this.client.get(`/cashflow/${id}`),
    createPartner: async (payload: RequestData): Response =>
      this.client.post('/cashflow', payload),
    createProvider: async (payload: RequestData): Response =>
      this.client.post('/cashflow/provider', payload),
    createInternal: async (payload: RequestData): Response =>
      this.client.post('/cashflow/internal', payload),
    createExternal: async (payload: RequestData): Response =>
      this.client.post('/cashflow/external', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/cashflow/${id}`, payload),
    disable: async (id: string): Response => this.client.put(`/cashflow/${id}`),
  };

  public category = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/category/public', params),
    findOne: async (id: string): Response => this.client.get(`/category/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/category', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/category/${id}`, payload),
    disable: async (id: string): Response => this.client.put(`/category/${id}`),
    enable: async (id: string): Response =>
      this.client.put(`/category/${id}/enable`),
  };

  public customer = {
    find: async (params?: RequestParams): Response =>
      this.client.get('/customer', params),
    findOne: async (id: string): Response => this.client.get(`/customer/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/customer', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/customer/${id}`, payload),
    disable: async (id: string): Response => this.client.put(`/customer/${id}`),
  };

  public chargeMethod = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/chargeMethod/public', params),
    findOne: async (id: string): Response =>
      this.client.get(`/chargeMethod/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/chargeMethod', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/chargeMethod/${id}`, payload),
    disable: async (id: string): Response =>
      this.client.delete(`/chargeMethod/${id}`),
  };

  public delivery = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/delivery/public', params),
    findMessage: async (id: string): Response =>
      this.client.get(`/delivery/${id}/message`),
    create: async (payload: RequestData): Response =>
      this.client.post('/delivery', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/delivery/${id}`, payload),
    disable: async (id: string): Response =>
      this.client.delete(`/delivery/${id}`),
  };

  public finance = {
    partnersBoard: async (): Response => this.client.get('/finance/partners'),
    partnerBoard: async (id: string): Response =>
      this.client.get(`/finance/partner/${id}`),
  };

  public inventory = {
    findShortage: async (): Response => this.client.get('/inventory/shortage'),
    findNegative: async (): Response => this.client.get('/inventory/negative'),
  };

  public order = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/order', params),
    findDue: async (): Response => this.client.get('/order/due'),
    findDraft: async (params: RequestParams = {}): Response =>
      this.client.get('/order/v2/draft', params),
    confirm: async (id: string, payload: RequestData): Response =>
      this.client.put(`/order/confirm/${id}`, payload),
    confirmDraft: async (id: string): Response =>
      this.client.put(`/order/v2/draft/confirm/${id}`),
    deliver: async (id: string): Response =>
      this.client.put(`/order/deliver/${id}`),
    rollbackDeliver: async (id: string): Response =>
      this.client.put(`/order/rollback/deliver/${id}`),
    prepare: async (id: string, payload: RequestData): Response =>
      this.client.put(`/order/prepare/${id}`, payload),
    removeDraft: async (id: string): Response =>
      this.client.delete(`/order/v2/draft/${id}`),
    suspend: async (id: string): Response =>
      this.client.put(`/order/suspend/${id}`),
    rollbackPrepare: async (id: string): Response =>
      this.client.put(`/order/rollback/prepare/${id}`),
    cancel: async (id: string): Response =>
      this.client.put(`/order/cancel/${id}`),
    findOne: async (id: string, params: RequestParams = {}): Response =>
      this.client.get(`/order/${id}`, params),
    create: async (payload: RequestData, params: RequestParams): Response =>
      this.client.post('/order', payload, { params }),
    createDraft: async (payload: RequestData): Response =>
      this.client.post('/order/draft', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.put(`/order/${id}`, payload),
    patch: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/order/${id}`, payload),
    updateDelivery: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/order/${id}/delivery`, payload),
    updateRoadmap: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/order/${id}/roadmap`, payload),
    disable: async (id: string): Response => this.client.put(`/order/${id}`),
  };

  public payMethod = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/payMethod', params),
    findOne: async (id: string): Response =>
      this.client.get(`/payMethod/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/payMethod', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/payMethod/${id}`, payload),
    disable: async (id: string): Response =>
      this.client.delete(`/payMethod/${id}`),
  };

  public product = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/product/public', params),
    findOne: async (id: string): Response => this.client.get(`/product/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/product', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/product/${id}`, payload),
    updateCriticalInventory: async (
      id: string,
      payload: RequestData
    ): Response => this.client.put(`/product/${id}/critical`, payload),
    adjustInventory: async (id: string, payload: RequestData): Response =>
      this.client.put(`/product/${id}/adjustment`, payload),
    forceAdjustment: async (id: string, payload: RequestData): Response =>
      this.client.put(`/product/${id}/force/adjustment`, payload),
    disable: async (id: string): Response =>
      this.client.delete(`/product/${id}`),
    enable: async (id: string): Response =>
      this.client.put(`/product/${id}/enable`),
  };

  public provider = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/provider/public', params),
    findOne: async (id: string): Response => this.client.get(`/provider/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/provider', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/provider/${id}`, payload),
    disable: async (id: string): Response => this.client.put(`/provider/${id}`),
    enable: async (id: string): Response =>
      this.client.put(`/provider/${id}/enable`),
  };

  public receipt = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/receipt', params),
    findOne: async (id: string): Response => this.client.get(`/receipt/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/receipt', payload),
  };

  public record = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/record', params),
    findByProduct: async (product: string): Response =>
      this.client.get(`/record/${product}`),
  };

  public roadmap = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/roadmap', params),
    findByDriver: async (driver: string): Response =>
      this.client.get(`/roadmap/${driver}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/roadmap', payload),
    disable: async (id: string): Response =>
      this.client.delete(`/roadmap/${id}`),
  };

  public statistics = {
    main: async (): Response => this.client.get('/statistics/main'),
    finances: async (): Response => this.client.get('/statistics/finances'),
    myFinances: async (): Response =>
      this.client.get('/statistics/my-finances'),
    providerBalances: async (): Response =>
      this.client.get('/statistics/provider-balances'),
    providerBalance: async (id: string): Response =>
      this.client.get(`/statistics/provider-balances/${id}`),
    cashBalances: async (): Response =>
      this.client.get('/statistics/cash-balances'),
    creditors: async (): Response => this.client.get('/statistics/creditors'),
    partnerHistory: async (): Response =>
      this.client.get('/statistics/partner-history'),
  };

  public third = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/third', params),
    findOne: async (id: string): Response => this.client.get(`/third/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/third', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.put(`/third/${id}`, payload),
  };

  public tracker = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/tracker', params),
    setAcknowledge: async (id: string): Response =>
      this.client.put(`/tracker/${id}/acknowledge`),
    findByProduct: async (
      product: string,
      params: RequestParams = {}
    ): Response => this.client.get(`/tracker/${product}`, params),
  };

  public user = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/user/public', params),
    findOne: async (id: string): Response => this.client.get(`/user/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/user', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/user/${id}`, payload),
    updateThird: async (id: string): Response =>
      this.client.put(`/user/${id}/third`),
    removeThird: async (id: string): Response =>
      this.client.delete(`/user/${id}/third`),
    updateProfile: async (payload: RequestData): Response =>
      this.client.put('/user/profile', payload),
    disable: async (id: string): Response => this.client.delete(`/user/${id}`),
    enable: async (id: string): Response =>
      this.client.put(`/user/${id}/enable`),
  };

  public withdrawal = {
    find: async (params: RequestParams = {}): Response =>
      this.client.get('/withdrawal', params),
    findOne: async (id: string): Response =>
      this.client.get(`/withdrawal/${id}`),
    create: async (payload: RequestData): Response =>
      this.client.post('/withdrawal', payload),
    update: async (id: string, payload: RequestData): Response =>
      this.client.patch(`/withdrawal/${id}`, payload),
    disable: async (id: string): Response =>
      this.client.delete(`/withdrawal/${id}`),
  };
}

export default ActivateServiceClient;
