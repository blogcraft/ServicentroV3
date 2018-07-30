import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {
    constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
        if (!this.swUpdate.isEnabled) {
            console.log('Nope 🙁');
        }

        this.swUpdate.available.subscribe(evt => {
            const snack = this.snackbar.open('Update Available', 'Reload', {
                duration: 6000
            });

            snack
                .onAction()
                .subscribe(() => {
                    window.location.reload();
                });
        });
    }
}