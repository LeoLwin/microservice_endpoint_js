const blogService = {
  name: 'blog',
  actions: {
    list: async () => ({ ok: true, data: [] }),
    get: async () => ({ ok: true, data: null }),
    create: async () => ({ ok: true, data: null }),
    update: async () => ({ ok: true, data: null }),
    delete: async () => ({ ok: true, data: null }),
  },
};

export default blogService;
