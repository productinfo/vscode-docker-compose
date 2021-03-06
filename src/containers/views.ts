import { TreeItem, TreeItemCollapsibleState, ExtensionContext } from "vscode";
import { ResourceType } from "../enums";
import { ContainerState } from "../containers/enums";
import { Container } from "../containers/models";
import { ComposeNode } from "../compose/views";

export class ContainerNode extends ComposeNode {

    // iconPath = {
	// 	light: path.join(__filename, '..', '..', '..', 'resources', 'light'),
	// 	dark: path.join(__filename, '..', '..', '..', 'resources', 'dark')
	// };

    constructor(
        context: ExtensionContext,
        public readonly container: Container
	) {
		super(context);
    }

    async getChildren(): Promise<ComposeNode[]> {
        return [];
    }

    async getTreeItem(): Promise<TreeItem> {
        const item = new TreeItem(this.container.name, TreeItemCollapsibleState.None);

        if (this.container.state == ContainerState.Up) {
            item.contextValue = ResourceType.RunningContainer;
            item.iconPath = {
                dark: this.context.asAbsolutePath('resources/service-up.png'),
                light: this.context.asAbsolutePath('resources/service-up.png')
            };
        } else {
            item.contextValue = ResourceType.ExitedContainer;
            item.iconPath = {
                dark: this.context.asAbsolutePath('resources/service-exit.png'),
                light: this.context.asAbsolutePath('resources/service-exit.png')
            };
        }

        return item;
    }
}
