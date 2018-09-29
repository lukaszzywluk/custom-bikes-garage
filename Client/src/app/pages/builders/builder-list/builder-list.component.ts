import { Component, OnInit } from '@angular/core'
import { Builder } from '../builder'
import { BuilderService } from '../_services/builder.service'

@Component({
  selector: 'app-builder-list',
  templateUrl: './builder-list.component.html',
  styleUrls: ['./builder-list.component.scss'],
})
export class BuilderListComponent implements OnInit {
  // Using Builder Model class
  builders: Builder[]
  isLoading: Boolean = false

  constructor(private builderService: BuilderService) {}

  ngOnInit() {
    // Get builder detail
    this.getBuilders()
  }

  getBuilders(): void {
    this.isLoading = true
    this.builderService
      .getBuilders()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error)
      )
  }

  handleResponse(response: Builder[]) {
    ;(this.isLoading = false), (this.builders = response)
  }

  handleError(error: any) {
    ;(this.isLoading = false), console.error(error)
  }
}
