<macro admintable>

<!--    <link rel="stylesheet" href="/css/admintable.css">-->

        <div class="row">
            <table class="table table-hover table-responsive">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Middle Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr id="d1">
                    <td>1</td>
                    <td id="f1">John</td>
                    <td id="l1">Wick</td>
                    <td id="m1">Doe</td>
                    <td>
                        <button type="button" data-toggle="modal" data-target="#edit" data-uid="1"
                                class="update btn btn-warning btn-sm"><span class="glyphicon glyphicon-pencil"></span>
                        </button>
                    </td>
                    <td>
                        <button type="button" data-toggle="modal" data-target="#delete" data-uid="1"
                                class="delete btn btn-danger btn-sm"><span class="glyphicon glyphicon-trash"></span>
                        </button>
                    </td>
                </tr>
                <tr id="d2">
                    <td>2</td>
                    <td id="f2">Jane</td>
                    <td id="l2">Wick</td>
                    <td id="m2">Doe</td>
                    <td>
                        <button type="button" data-toggle="modal" data-target="#edit" data-uid="2"
                                class="update btn btn-warning btn-sm"><span class="glyphicon glyphicon-pencil"></span>
                        </button>
                    </td>
                    <td>
                        <button type="button" data-toggle="modal" data-target="#delete" data-uid="2"
                                class="delete btn btn-danger btn-sm"><span class="glyphicon glyphicon-trash"></span>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="edit" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h4 class="modal-title">Update Data</h4>
                </div>
                <div class="modal-body">
                    <input id="fn" type="text" class="form-control" name="fname" placeholder="First Name">
                    <input id="ln" type="text" class="form-control" name="fname" placeholder="Last Name">
                    <input id="mn" type="text" class="form-control" name="fname" placeholder="Middle Name">
                </div>
                <div class="modal-footer">
                    <button type="button" id="up" class="btn btn-warning" data-dismiss="modal">Update</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div id="delete" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h4 class="modal-title">Delete Data</h4>
                </div>
                <div class="modal-body">
                    <strong>Are you sure you want to delete this data?</strong>
                </div>
                <div class="modal-footer">
                    <button type="button" id="del" class="btn btn-danger" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
</macro>