<?php
$title = "Mailer";
$subtitle = "Send message to multiple contacts.";
?>



<?php $__env->startSection('title',$title); ?>


<?php $__env->startSection('page-header'); ?>
<?php echo $__env->make('page-header',['title' => "Mailer",'subtitle' => $title], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('content'); ?>
<script>
$(document).ready(() => {
	let sendMsgEditor = new Simditor({
		textarea: $('#m'),
		toolbar: toolbar,
		placeholder: `Enter your messsage here. Maximum of 1000 words..`
	});	
});
</script>
<div class="row">
<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Send message</h5>
                                <div class="card-body">
                                    <form action="#" id="sm-form" method="post" enctype="multipart/form-data">
										<?php echo csrf_field(); ?>

										<input type="hidden" id="spp-s" value="show">
										
										<div class="row">
                                            <div class="col-sm-12 pl-0">
                                                <p class="text-right">
                                                    <button class="btn btn-space btn-secondary" id="add-sender-submit">Save</button>
                                                </p>
                                            </div>
                                        </div>
										
										<div class="row">
										  <div class="col-md-12">
										  <div class="form-group">
                                            <h4>From</h4>
                                            <input type="text" class="form-control" id="f" name="f" placeholder="From address" value="<?php echo e($from); ?>" required/>
										  </div>
										</div>
										
										  
										<div class="row">
											<div class="col-md-12">
					                            <div class="form-group">
	                                            <h4>Subject</h4>
	                                            <input type="text" class="form-control" name="s" id="s" placeholder="Subject" required/>
												</div>
					                        </div>
											<div class="col-md-12">
	                                            <h4>Message</h4>
												   <div class="row">
												    	<div class="col-md-12">
												          <textarea class="form-control" id="m" placeholder="Message" required></textarea>
													    </div>
													    
												    </div>
											
					                        </div>
										</div>
										
                                        
                                                                                
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                                            <div class="col-sm-12 pl-0">
                                            	<span class="form-control-plaintext alert alert-info" id="send-loading">Sending.. <img src="<?php echo e(asset('images/loading.gif')); ?>" width="50" height="50"></span>
                                            	<div class="card">
                                <h5 class="card-header">Results</h5>
                                <div class="card-body" id="r">
                                                <p class="text-bold">
                                                    Results will be displayed here
                                                </p>
                                            </div>
                                        </div>
                          </div>
                          </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\bkupp\lokl\repo\tobis-mailer\resources\views/index.blade.php ENDPATH**/ ?>