import Mock from 'mockjs';
import user from './user';
const mocks = [...user];
//设置延时时间
Mock.setup({
    timeout: '300-600',
});

export interface MockParams {
    url: string;
    type: string;
    response(): Record<string, unknown>;
}
export function mockXHR() {
    let i: MockParams;
    for (i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || 'get', i.response);
    }
}
