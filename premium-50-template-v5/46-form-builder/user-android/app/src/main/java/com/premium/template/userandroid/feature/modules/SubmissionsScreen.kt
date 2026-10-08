package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun SubmissionsScreen(onCreate:()->Unit){Card{Column{Text("Submissions");Text("Domain-specific submissions workflow");Button(onClick=onCreate){Text("Create")}}}}
