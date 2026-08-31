import { describe, it, expect } from 'vitest';
import blogService from '../service/blogService.js';

describe('blog service contract', () => {
  it('should expose the blog service with list/get/create/update/delete actions', () => {
    expect(blogService.name).toBe('blog');
    expect(blogService.actions).toHaveProperty('list');
    expect(blogService.actions).toHaveProperty('get');
    expect(blogService.actions).toHaveProperty('create');
    expect(blogService.actions).toHaveProperty('update');
    expect(blogService.actions).toHaveProperty('delete');
  });
});
