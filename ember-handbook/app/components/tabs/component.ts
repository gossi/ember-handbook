import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

import TabComponent from "./tab/component";

export default class TabsComponent extends Component {
  tabs: TabComponent[] = [];
  @tracked activeTab?: TabComponent;

  tablist!: HTMLDivElement;

  portal = `${guidFor(this)}-tablist`;

  @action
  register(segment: TabComponent): void {
    this.tabs.push(segment);

    if (this.tabs.length === 1) {
      this.activeTab = segment;
    }
  }

  @action
  activate(event: MouseEvent): void {
    const tab = this.getTabFromEvent(event);
    if (tab) {
      this.activeTab = this.findSegment(tab);
    }
  }

  @action
  navigate(event: KeyboardEvent): void {
    if (event.key === "ArrowRight") {
      this.navigateNext(event);
    }

    if (event.key === "ArrowLeft") {
      this.navigatePrevious(event);
    }
  }

  private navigateNext(event: KeyboardEvent) {
    const tab = this.getTabFromEvent(event);

    if (tab) {
      const segment = this.findSegment(tab);
      const index = this.tabs.indexOf(segment);
      if (index < this.tabs.length - 1) {
        this.select(this.tabs[index + 1]);
      }
    }
  }

  private navigatePrevious(event: KeyboardEvent) {
    const tab = this.getTabFromEvent(event);

    if (tab) {
      const segment = this.findSegment(tab);
      const index = this.tabs.indexOf(segment);
      if (index > 0) {
        this.select(this.tabs[index - 1]);
      }
    }
  }

  private select(tab: TabComponent): void {
    this.activeTab = tab;
    this.getElementFromTab(tab)?.focus();
  }

  private getTabFromEvent(event: Event): HTMLButtonElement | undefined {
    const target = event.target as HTMLButtonElement;

    if (target && target.getAttribute("role") === "tab") {
      return target;
    }
  }

  private findSegment(element: HTMLButtonElement) {
    const index = [...this.tablist.children].indexOf(element);
    return this.tabs[index];
  }

  private getElementFromTab(tab: TabComponent): HTMLButtonElement | undefined {
    return this.tablist.children[this.tabs.indexOf(tab)] as HTMLButtonElement;
  }
}
