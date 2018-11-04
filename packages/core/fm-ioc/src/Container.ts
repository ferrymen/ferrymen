/**
 * A container of Appliction
 */
export class Container {
  /**
   * a name
   */
  public name!: string;
  public age!: number;

  /**
   * Get name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Set name
   * @param name name of guy
   */
  public setName(name: string): void {
    this.name = name;
  }
}
