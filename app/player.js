/* this class is created based on the assumption that dealer is
  the computer, the player is playing against with. They're all
  player at the end of the day and holds the same state.
*/

export class Player {
  constructor(props){
    this.id = props;
    this.hand = [];
    this.total = 0;
  }
}
