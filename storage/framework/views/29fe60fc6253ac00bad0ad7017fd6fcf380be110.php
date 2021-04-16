<?php
$title = "Track";
$subtitle = "Track your order";
?>



<?php $__env->startSection('title',$title); ?>



<?php $__env->startSection('page-header'); ?>
  <?php echo $__env->make('page-header',['title' => $title, 'subtitle' => $subtitle,], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
 <div class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="custom-heading">
                            <h2>TRACK YOUR ORDER</h2>
                        </div><!-- .custom-heading end -->
                        <form action="<?php echo e(url('track')); ?>">
						  <div class="form-group">
						   <h5 class="">Tracking Number</h5>
						   <input type="text" name="xx" class="form-control" placeholder="Tracking number">
						  </div>
						  <button type="submit" class="btn btn-primary btn-lg text-white" style="padding: 10px; color: #fff;">TRACK</button>
						</form>
                    </div><!-- .col-md-12 end -->


                </div><!-- .row end -->
            </div><!-- .container end -->
        </div><!-- .page-content end -->

        
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\bkupp\lokl\repo\chstore-movers\resources\views/track.blade.php ENDPATH**/ ?>