package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FeedbackScreen(onCreate:()->Unit){Card{Column{Text("Feedback");Text("Domain-specific feedback workflow");Button(onClick=onCreate){Text("Create")}}}}
