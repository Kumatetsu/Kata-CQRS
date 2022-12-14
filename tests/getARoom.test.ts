import { getARoom } from '@/useCases/getARoom/getARoom';

test('should return a room with a name', () => {
    expect(getARoom().name).toBe('Room Test');
});
