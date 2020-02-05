
describe('A Spec', () => {

  it('that test things', () => {

    // Arrange
    const x: string = 'Hello Jasmine!';

    // Act
    const y: string = x + "";

    // Assert
    expect(y).toBe('Hello Jasmine!');

  });

});
