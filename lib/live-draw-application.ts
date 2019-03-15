import { Application, ControlObject, Grid, GridModifier } from 'svg-live-drawing';

export class LiveDrawApplication extends Application {
  private gridActive: boolean = false;
  private grid: Grid;
  private gridModifier: GridModifier;

  public constructor( container: any ) {
    super( container );

    this.grid = new Grid();
    this.grid.style = 'hidden';
    this.backgroundLayer.addElement( this.grid );

    this.gridModifier = new GridModifier( 50 );
    this.gridModifier.enable( false );

    this.controlFactory.afterCreateHook = ( control: ControlObject ): void => {
      control.addRestrictor( this.gridModifier );
    };

    this.toolManager.setWorkingLayer( this.documentLayer );
  }

  public toggleGrid(): void {
    this.gridActive = !this.gridActive;
    this.gridModifier.enable( this.gridActive );
    this.grid.style = this.gridActive ? 'active' : 'hidden';
  }

  public activateTool( toolName: string ): void {
    this.toolManager.setTool( toolName );
    this.selectionManager.set( null );
  }
}
